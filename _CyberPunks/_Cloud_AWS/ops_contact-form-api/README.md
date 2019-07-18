

# lambda endpoint

https://0sdtjcuryj.execute-api.us-east-1.amazonaws.com/dev/email/send

# references: 

https://dev.to/adnanrahic/building-a-serverless-contact-form-with-aws-lambda-and-aws-ses-4jm0

# updating
run:

serverless deploy

test:
 curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"email":"john.doe@email.com","name":"John Doe","content":"Hey! testing the email form"}' \
  https://0sdtjcuryj.execute-api.us-east-1.amazonaws.com/dev/email/send
