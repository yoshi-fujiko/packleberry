# Require any additional compass plugins here. 

# Set this to the root of your project when deployed:
http_path = "./"
css_dir = (environment == :production) ? "css" : "css_debug"
sass_dir = "./sass"
images_dir = "./img"
javascripts_dir = "./js"
line_comments = true
output_style = (environment == :production) ? :compressed : :expanded
