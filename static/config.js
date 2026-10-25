/**
 * Environment Configuration Loader Fallback
 * Values are dynamically overridden by main.py server reading from .env
 */
window.APP_CONFIG = window.APP_CONFIG || {
    SUPABASE_URL: 'https://xyzcompany.supabase.co',
    SUPABASE_ANON_KEY: 'your_supabase_anon_key_here',
    EMAIL_ACCESS_KEY: 'your_web3forms_access_key_here'
};
