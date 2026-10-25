#!/usr/bin/env python3
"""
ISTANBUL KEBAB House - Web Server with .env Environment Loader
Run with: python3 main.py
"""

import http.server
import socketserver
import json
import os

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(ROOT_DIR, "static")
ENV_FILE = os.path.join(ROOT_DIR, ".env")

def load_env_vars():
    """Simple built-in .env file parser"""
    env_vars = {}
    if os.path.exists(ENV_FILE):
        with open(ENV_FILE, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, val = line.split("=", 1)
                    env_vars[key.strip()] = val.strip()
    return env_vars

ENV_CONFIG = load_env_vars()
PORT = int(ENV_CONFIG.get("PORT", 8000))


class RestaurantRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=STATIC_DIR, **kwargs)

    def do_GET(self):
        # Serve dynamic JS environment configuration from .env file
        if self.path == "/config.js":
            config_payload = {
                "SUPABASE_URL": ENV_CONFIG.get("SUPABASE_URL", ""),
                "SUPABASE_ANON_KEY": ENV_CONFIG.get("SUPABASE_ANON_KEY", ""),
                "EMAIL_ACCESS_KEY": ENV_CONFIG.get("EMAIL_ACCESS_KEY", "")
            }
            js_content = f"window.APP_CONFIG = {json.dumps(config_payload, indent=2)};\n"
            
            self.send_response(200)
            self.send_header("Content-Type", "application/javascript")
            self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
            self.end_headers()
            self.wfile.write(js_content.encode("utf-8"))
            return

        return super().do_GET()


def run_server():
    os.chdir(STATIC_DIR)
    handler = RestaurantRequestHandler
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f"==================================================")
        print(f" Istanbul Kebab House Server is Running!")
        print(f" Main Site: http://localhost:{PORT}/")
        print(f" Loaded .env sensitive keys into window.APP_CONFIG")
        print(f"==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            httpd.server_close()


if __name__ == "__main__":
    run_server()
