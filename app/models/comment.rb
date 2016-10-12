# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  author     :text
#  content    :text
#  house_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  belongs_to :house
end
