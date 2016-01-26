class Post < ActiveRecord::Base
		  extend FriendlyId
    friendly_id :title, use: [:slugged, :history]
	validates_presence_of :body, :title

end
