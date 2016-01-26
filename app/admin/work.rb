ActiveAdmin.register Work do

    before_filter :only => [:show, :edit, :update, :destroy] do
    @work = Work.friendly.find(params[:id])
  end

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  permit_params :title, :thumbnail, :description, :shortdescription, :year, :picture, :picture2, :picture3, :picture4, :picture5, :employer, :url
  #
  # or
  #
  # permit_params do
  #   permitted = [:permitted, :attributes]
  #   permitted << :other if resource.something?
  #   permitted
  # end

end
