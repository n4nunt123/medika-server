## ENDPOINTS
List of available endpoints:
  - `GET /users/:id`
  - `POST /users/register`
  - `POST /users/login`
  - `GET /doctors/`
  - `GET /doctors/:id`
  - `GET /schedule-users/`
  - `POST /schedule-users/`
  - `GET /schedule-users/user/:userId`
  - `GET /schedule-users/:id`


## GET /users/:id
### Description
  - Get data user by id
#### Response
_200 - OK_
- Body
    ```json
    {
        "_id": INTEGER,
        "email": STRING,
        "password": STRING,
        "age": STRING,
        "gender": STRING,
        "adress": STRING,
        "phoneNumber": STRING,
    }
    ```
    
_404 - Bad Request_
- Body
    ```json
    {
      "message": "Error data not found"
    }
    ```

## POST /users/login
### Description
  - Login endpoints
#### Request
- Body
    ```json
    {
      "fullName": STRING,
      "email": STRING,
      "password": STRING,
      "age": STRING,
      "gender": STRING,
      "phoneNumber": STRING,
      "address": STRING
    }
    ```
#### Response
_200 - OK_
- Body
    ```json
    {
      "access_token": STRING,
      "id": STRING
    }
    ```
    
_404 - Bad Request_
- Body
    ```json
    {
      "message": "Invalid email/password"
    }
    ```
    
_404 - Bad Request_
- Body
    ```json
    {
      "message": "Error data not found"
    }
    ```

## POST /users/register
### Description
- Create a new User data
#### Request
- Body
    ```json
    {
      "username": STRING,
      "password": STRING,
      "email": STRING,
    }
    ```
#### Response
_201 - Created_
- Body
    ```json
    {
        "id": INTEGER,
        "email": STRING,
    }
    ```
    
## GET /doctors
### Description
  - Get all data doctor
#### Response
_200 - OK_
- Body
    ```json
    {
      [
        "_id": INTEGER,
        "fullName": STRING,
        "specialist": STRING,
        "scheduleStart": STRING,
        "scheduleEnd": STRING,
        "adress": STRING,
        "profilPic": STRING,
      ],...
    }
    ```
    
_404 - Bad Request_
- Body
    ```json
    {
      "message": "Error data not found"
    }
    ```

## GET /doctors/:id
### Description
  - Get data doctor by id
#### Response
_200 - OK_
- Body
    ```json
    {
        "_id": INTEGER,
        "fullName": STRING,
        "specialist": STRING,
        "scheduleStart": STRING,
        "scheduleEnd": STRING,
        "adress": STRING,
        "profilPic": STRING,
    }
    ```


## POST /schedule-users
### Description
  - Get all data schedule user
#### Request
- Body
    ```json
    { 
      "fullName": STRING, 
      "age": STRING, 
      "gender": STRING, 
      "phoneNumber": STRING, 
      "address": STRING, 
      "day": STRING, 
      "doctor": STRING,
      "doctorScheduleStart": STRING,
      "doctorScheduleEnd": STRING,
      "doctorSpecialist": STRING,
      "userId": STRING 
    }
    ```
#### Response
_201 - Created_
- Body
    ```json
    {
      "message": "Success create data with id: ${data.insertedId}"
    }
    ```
    
_404 - Bad Request_
- Body
    ```json
    {
      "message": "Error data not found"
    }
    ```
    
    
## GET /schedule-users
### Description
  - Create new data schedule user
#### Response
_200 - OK_
- Body
    ```json
    {
      "_id": INTEGER,
      "fullName": STRING,
      "age": STRING,
      "gender": STRING,
      "phoneNumber": STRING,
      "adress": STRING,
      "day": STRING,
      "doctor": STRING,
      "doctorScheduleStart": STRING,
      "doctorScheduleEnd": STRING,
      "doctorSpecialist": STRING,
      "userId": STRING,
    }
    ```
    
_404 - Bad Request_
- Body
    ```json
    {
      "message": "Error data not found"
    }
    ```
    
## GET /schedule-users/:id
### Description
  - Get data schedule user by id
#### Response
_200 - OK_
- Body
    ```json
    {
      "_id": INTEGER,
      "fullName": STRING,
      "age": STRING,
      "gender": STRING,
      "phoneNumber": STRING,
      "adress": STRING,
      "day": STRING,
      "doctor": STRING,
      "doctorScheduleStart": STRING,
      "doctorScheduleEnd": STRING,
      "doctorSpecialist": STRING,
      "userId": STRING,
    }
    ```
    
_404 - Bad Request_
- Body
    ```json
    {
      "message": "Error data not found"
    }
    ```

## GET /schedule-users/user/:userId
### Description
  - Get data schedule user within id logged user
#### Response
_200 - OK_
- Body
    ```json
    {
        [
          "_id": INTEGER,
          "fullName": STRING,
          "age": STRING,
          "gender": STRING,
          "phoneNumber": STRING,
          "adress": STRING,
          "day": STRING,
          "doctor": STRING,
          "doctorScheduleStart": STRING,
          "doctorScheduleEnd": STRING,
          "doctorSpecialist": STRING,
          "userId": STRING,
        ],...
    }
    ```
    
_404 - Bad Request_
- Body
    ```json
    {
      "message": "Error data not found"
    }
    ```
    
_404 - Bad Request_
- Body
    ```json
    {
      "message": "Error data not found"
    }
    ```

### Global Error
#### Response
_500 - Bad Request_
- Body
    ```json
    {
      "message": "internal server error" 
    }
    ```
