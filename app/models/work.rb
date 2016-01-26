class Work < ActiveRecord::Base
			  extend FriendlyId
    friendly_id :title, use: [:slugged, :history]
	validates_presence_of :description, :shortdescription, :title, :employer, :url, :thumbnail
	 validates_length_of :shortdescription, :maximum => 100
	mount_uploader :picture, PictureUploader
	mount_uploader :picture2, PictureUploader
	mount_uploader :picture3, PictureUploader
	mount_uploader :picture4, PictureUploader
	mount_uploader :picture5, PictureUploader
	mount_uploader :thumbnail, PictureUploader

end
