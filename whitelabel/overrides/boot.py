from frappe import _

def boot_session(bootinfo):
    """Modify boot info for whitelabeling"""
    # Replace default logo
    bootinfo.logo_url = '/assets/whitelabel/images/applogo.svg'
    bootinfo.app_logo_url = '/assets/whitelabel/images/applogo.svg'
    
    # Remove help menu
    bootinfo.help_menu = []
    
    # Add custom branding info
    bootinfo.branding = {
        "name": "Radius ERP - A Global Turner Company",
        "copyright": f"© {frappe.utils.now_datetime().year} Radius ERP"
    }