# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Allows backend column names to be in snake_case while camelCase used on front end
Jbuilder.key_format camelize: :lower
