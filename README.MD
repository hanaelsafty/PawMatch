# 🐾 PawMatch – Pet Adoption Platform

## 📌 Project Idea

**PawMatch** is a full-stack web application designed to connect people who want to adopt pets with animal shelters and rescuers.

### Why This Idea?

Pet adoption information can be spread across different platforms, making it difficult for potential adopters to find pets in one place. PawMatch provides an organized platform where shelters can list pets available for adoption and users can easily discover and apply to adopt them.

The project is suitable for a full-stack application because it includes CRUD operations, authentication, authorization, database management, image uploads, and multiple user roles.

---

# 📝 Project Description

PawMatch allows animal shelters to create and manage pet listings, while potential adopters can browse available pets, view their details, and submit adoption requests.

The main purpose of the application is to make the pet adoption process easier by connecting shelters with potential adopters through one organized platform.

### Target Users

* 🏠 Animal Shelters
* 🐾 People looking to adopt pets
* 👨‍💼 System Administrators

---

# 👥 User Roles & Permissions

## 👨‍💼 Admin

The Admin manages the overall system.

**Permissions:**

* Manage users
* Manage pets
* Manage adoption requests
* Access the Admin Dashboard
* Remove inappropriate listings

## 🏠 Shelter

The Shelter manages pets available for adoption.

**Permissions:**

* Add pets
* View pets
* Edit their pets
* Delete their pets
* Upload pet images
* View adoption requests
* Manage adoption requests
* Access the Shelter Dashboard

## 🐾 Adopter

The Adopter is a user who wants to adopt a pet.

**Permissions:**

* Register and login
* Browse available pets
* Search and filter pets
* View pet details
* Submit adoption requests
* View their adoption requests

---

# ⚙️ Main Features

## 🔐 Authentication

* User registration
* User login
* User logout
* Protected user accounts

## 🛡️ Authorization

* Role-based access control
* Different permissions for Admin, Shelter, and Adopter
* Protected pages based on user role
* Shelter Dashboard
* Admin Dashboard

## 🐶 Pet Management – CRUD

### Create

* Add a new pet
* Enter pet information
* Upload a pet image

### Read

* View all available pets
* View individual pet details
* Search for pets
* Filter pets

### Update

* Edit pet information
* Update pet adoption status
* Update pet image

### Delete

* Delete a pet listing

## 📝 Adoption Requests

* Submit an adoption request
* View adoption requests
* Manage adoption requests

## 🔎 Search & Filtering

Users can search and filter pets by:

* Animal type
* Breed
* Age
* Gender
* Adoption status

---

# 🗄️ Database Management

The application will use a database to store and manage information related to:

* Users
* Shelters
* Pets
* Adoption Requests

### Main Entities

```text
User
Shelter
Pet
Adoption Request
```

### Pet Information

Each pet can contain:

* Name
* Animal type
* Breed
* Age
* Gender
* Description
* Adoption status
* Image

---

# 🖼️ Image/File Upload

## Pet Images

**Allowed file types:**

* JPG
* JPEG
* PNG
* WEBP

**Maximum size:**

* 5 MB

**Uploaded by:**

* Shelters
* Admin

## Profile Pictures

**Allowed file types:**

* JPG
* JPEG
* PNG

**Maximum size:**

* 5 MB

**Uploaded by:**

* Registered users

---

# 🎨 UI Design

The application UI was designed using **Figma**.

### Designed Screens

1. 🏠 Home Page
2. 🐾 Browse Pets Page
3. 🐶 Pet Details Page
4. 🔐 Login Page
5. 📝 Register Page
6. 🏠 Shelter Dashboard
7. ➕ Add Pet Page

### Figma Design

[**View PawMatch UI Design on Figma**](https://www.figma.com/design/iON2MrJVFwtEko2XoxbL7E/Pet-Adoption-Website-PawMatch-?node-id=0-1&t=OgSlhyFOLEt53rA8-1)

---

# 📱 UI Screens Overview

## 1. Home Page

The main landing page of PawMatch. It introduces the platform and allows users to navigate to the pet listings.

## 2. Browse Pets

Displays available pets using pet cards. Users can search and filter pets and view individual pet details.

## 3. Pet Details

Displays detailed information about a selected pet, including its image, name, breed, age, gender, location, status, and description.

Users can select **Apply for Adoption**.

## 4. Login

Allows existing users to log into their PawMatch account using their email and password.

## 5. Register

Allows new users to create an account by entering their information, email, password, and selecting their user type.

## 6. Shelter Dashboard

Provides the Shelter with an overview of their pets, including total pets, available pets, pending pets, and adopted pets.

The dashboard also allows the Shelter to manage pet listings.

## 7. Add Pet

Allows a Shelter to create a new pet listing by entering pet information and uploading a pet image.

---

# 🎯 Project Objectives

The project aims to:

* Practice full-stack application planning
* Understand CRUD operations
* Implement user authentication
* Implement role-based authorization
* Practice database management
* Handle image uploads
* Design user interfaces before development
* Plan a real-world web application

---

# 🚀 Future Development

The planned development stages are:

1. Backend setup using Node.js and Express
2. MongoDB database integration
3. Pet CRUD operations
4. User authentication
5. Role-based authorization
6. Image upload functionality
7. Adoption request management
8. Frontend development
9. Connecting the frontend with the backend

---

## 👩‍💻 Project Status

**Current Stage:** Project Planning & UI Design

The UI design has been completed in Figma. Backend development will be implemented in the next stage.
