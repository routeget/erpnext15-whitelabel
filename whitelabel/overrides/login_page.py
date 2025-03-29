from frappe.website.doctype.login_page.login_page import LoginPage
import frappe

class CustomLoginPage(LoginPage):
    def get_context(self, context):
        super().get_context(context)
        
        # Add custom branding to context
        context.branding = {
            "logo": "/assets/whitelabel/images/applogo.svg",
            "copyright": f"© {frappe.utils.now_datetime().year} Radius ERP"
        }
        
        # Mobile detection
        context.is_mobile = frappe.local.request.user_agent.platform in ['iphone', 'android']