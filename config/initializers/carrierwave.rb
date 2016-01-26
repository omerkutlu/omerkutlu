CarrierWave.configure do |config|
  config.fog_credentials = {
    provider:                         'Google',
    google_storage_access_key_id:     'GOOGM7X5D6X7JYQULLNR',
    google_storage_secret_access_key: 'ttyagTvGphyYjfbSW/CPv/IvUEvxcUQQFusG4xSS'
  }
  config.fog_directory = 'omerkutlu1'

end