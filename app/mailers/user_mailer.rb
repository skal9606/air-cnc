class UserMailer < ApplicationMailer
  default from: "aircnc@admin.com"

def welcome(user)
    @user = user
    # @booking_sumary = booking_summary
    # @email = user.email

    mail( :to => @user.email, :subject => "Thanks for signing up!", :cc => "samit.c.kalra@gmail.com" )
end


end
