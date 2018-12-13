@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :fname, :email
  end
end
