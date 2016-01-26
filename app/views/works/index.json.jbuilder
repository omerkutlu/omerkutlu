json.array!(@works) do |work|
  json.extract! work, :id, :title, :description, :picture, :picture2, :picture3, :picture4, :thumbnail
  json.url work_url(work, format: :json)
end
