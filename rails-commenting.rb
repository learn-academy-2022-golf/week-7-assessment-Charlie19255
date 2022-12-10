# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Creation of the controller to define methods. Defined index method for use.
class BlogPostsController < ApplicationController
  def index
    # ---2) Be able to see all instances in the Blogpost table.
    @posts = BlogPost.all
  end

  # ---3)Be able to show a specific instance based on the primary key inputted.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Be able to start the process of creating a new instance.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) See if the created instances meets standards and redirect user to blog_post page if it does meet standards. Defines edit method.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Locates specifc blogpost instance through primary key. Defines update and locates the same instance.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Allows changes to the blogpost as long as it meets standards and redirects to blog_post if it does meets standards. Defines destroy method and locates blogpost instance via primary key.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Redirects to blog_post page if the blog post instance is destroyed.
      redirect_to blog_posts_path
    end
  end

  # ---9)Allows for the code above private to not be seen by anyone accessing the site via webpage. Defines blog_post_params.
  private
  def blog_post_params
    # ---10) States what the user who accesses the webpage can do which is add blog posts with a title and content.
    params.require(:blog_post).permit(:title, :content)
  end
end
