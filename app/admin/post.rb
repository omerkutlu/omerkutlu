ActiveAdmin.register Post do
    form do |f|
		f.inputs do
			f.input :title
			f.input :body, :input_html => { :class => "tinymce_editor" }
            f.submit
		end
    end

    
 before_filter :only => [:show, :edit, :update, :destroy] do
    @post = Post.friendly.find(params[:id])
  end
    
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # permit_params :list, :of, :attributes, :on, :model
  #
  permit_params :title, :body 
  #
  # permit_params do
  #   permitted = [:permitted, :attributes]
  #   permitted << :other if resource.something?
  #   permitted
  # end


    
end
