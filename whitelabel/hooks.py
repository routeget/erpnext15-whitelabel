from . import __version__ as app_version

app_name = "whitelabel"
app_title = "Whitelabel"
app_publisher = "Radius ERP"
app_description = "Whitelabel Customization for ERPNext"
app_icon = "octicon octicon-versions"
app_color = "grey"
app_email = "info@radiuserp.com"
app_license = "MIT"

# Include JS/CSS in assets
app_include_css = "assets/css/whitelabel.bundle.css"
app_include_js = "assets/js/whitelabel.bundle.js"

# Web includes
web_include_js = ["assets/js/whitelabel.js"]
web_include_css = ["assets/css/whitelabel.css"]

# Override templates and classes
override_doctype_class = {
    "Login Page": "whitelabel.overrides.login_page.CustomLoginPage"
}

# Boot hooks
boot_session = "whitelabel.overrides.boot.boot_session"

# Website context
website_context = {
    "favicon": "/assets/whitelabel/images/favicon.ico",
    "splash_image": "/assets/whitelabel/images/applogo.svg"
}