# FocusForge by Alex Gordon

## Content List
- [FocusForge App](#FocusForge-App)
- [User Story](#user-story)
- [Features and Wireframe](#features-and-wireframe)
- [Technology](#technology)
- [Testing](#testing)
- [Code Validation](#code-validation)
- [Deployment and Local Development](#deployment-and-local-development)
- [Credits](#credits)

## FocusForge App

### Project and Customer Goals

This app is designed to simplify task management by allowing users to add tasks and organise them into categories, providing a streamlined approach to productivity. The primary goal of the project is to offer an intuitive, user-friendly experience that enables users to stay organised and focused on completing their to-dos. By categorising tasks, users can prioritise and manage their workload effectively, reducing the chances of overlooking important items. The app caters to user needs by providing a clear and accessible interface that minimises distractions, and it fulfils user wants by offering flexible organisation options to suit a variety of task types and schedules. Ultimately, this software aims to empower users to take control of their tasks, helping them achieve their goals.


### Features and Functionality

The app offers essential features designed to efficiently manage tasks and categories through the use of CRUD operations—an acronym for Create, Read, Update, and Delete, which are the core functions for managing data in a database. **Create** allows users to add new tasks and categories, ensuring they can keep track of all their to-dos. **Read** enables users to retrieve and view their existing tasks and categories, ensuring easy access to their information at any time. The **Update** function allows users to edit task details or category names, making it easy to keep everything current and relevant. Finally, the **Delete** feature lets users remove tasks or categories that are no longer needed, helping to keep their lists organised and clutter-free. These features work seamlessly together to offer a comprehensive and intuitive way for users to manage their tasks and categories with ease.


### Information Architecture

The app is built on a **relational database structure**, where information is organised into tables that are interlinked to efficiently manage tasks and categories. At the core of the system, there are two main entities: tasks and categories. Each task is associated with a specific category, creating a relationship between the two. The tasks table stores information such as task names, descriptions, due dates, urgency and a reference to the category it belongs to. The categories table holds data about the different task categories, such as category names. These tables are linked through a foreign key, allowing tasks to be easily grouped under relevant categories. This relational structure ensures data integrity, simplifies updates, and allows users to view or modify tasks and categories without redundancy. By organising the data in this way, the app offers efficient data retrieval, updating, and management, helping users keep their information well-structured and accessible.

### Interface and Navigation Design

The interface and navigation design of the app have been carefully crafted to ensure a seamless experience across both mobile and desktop devices. By incorporating a responsive design using the Materialize front-end framework, the app adjusts to different screen sizes, providing a consistent and user-friendly experience on any device. The main navigation menu is easy to access and intuitive, offering quick access to key sections of the app while maintaining a clean and uncluttered layout. 


### Visual Design and Aesthetics

The colour scheme has been thoughtfully selected to enhance focus and engagement. The use of orange, in particular, evokes feelings of optimism, confidence, and enthusiasm, while also conveying warmth and agreeableness. Depending on its shade, orange can feel fresh, youthful, and creative, which aligns with the app's aim to encourage productivity in an inviting and energising environment. Additionally, the decision to keep the automatic default font was made to maintain a sense of formality, ensuring the design remains professional and easily readable without distraction. This careful combination of design elements ensures that users can navigate the app effortlessly while enjoying a visually appealing and emotionally uplifting experience.


## User Story

describe what new users, returning users, and frequent users might expect.
User stories will also serve as a checklist for the Testing section, where you verify each requirement has been met.


## Features and Wireframe

### Home Page 
![Home Page](taskmanager/assets/images/wireframe_homepage.png)

On the homepage wireframe, I want the menu to be clearly accessible, and the app's name to be prominent and easily noticeable. The main view should display the tasks that have already been created, so that users are immediately presented with what needs to be done upon opening the app—without unnecessary distractions. The footer should remain consistent throughout the app, including an open-source statement and a link to the original creator's GitHub.


### Categories Page
![Categories Page](taskmanager/assets/images/wireframe_category.png)

On the categories page, the header and footer should remain the same. The primary difference should be tiles displaying the created categories, each with options to edit or delete. There should also be a prominently placed, centrally located button to add new categories.


### Task Page
![Task Page](taskmanager/assets/images/wireframe_task.png)

On the tasks page, the header and footer should remain the same to ensure consistency throughout the app. There should be an easy-to-use input area to add a task name, description, due date, and the category to which the task should be assigned. Include a centrally located, clearly visible "Add Task" button.

## Technology
+ This website was made in its entirety using Visual Code Studio
+ Wireframe were made in *** (include link)
+ Additional software used to create this website include Chrome for previewing, inspecting and bug testing
+ Code languages used in this project are as follows:
    + HTML for the structure of the webpage 
    + CSS for the styling 
    + Javascript for the interactivity
    + Python+Flask for function 
    + PostgreSQL for Database
+ Materialize was used as a modern responsive front-end framework

## Testing

### Bugs and Fixes 
explain what was the problem and how you fixed it (example.include an extra space in database url and used student support to fix)

## Code validation
I used <a href="https://validator.w3.org/" target="_blank">W3C</a> to validate my code.

![HTML](actual_link_toPhoto)

![css](actual_linktoPhoto)

![photo](actual_linktoPhoto)


### Lighthouse Report:

![visual link](actual_linktoPhoto)
![visual link](actual_linktoPhoto)
![visual link](actual_linktoPhoto)
![visual link](actual_linktoPhoto)
![visual link](actual_linktoPhoto)


I used <a href="websiteUsedToTestGoesHere" target="_blank">nameOfWebsite</a> to validate my files, No serious issues were detected.

Below is my TEST file
![visual link](actual_linktoPhoto)

Below is my TEST file
![visual link](actual_linktoPhoto)
 

## Deployment and Local Development

### Deployment

The site is deployed using Heroku ..............................

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Al3x-G/Task_Manager_App](https://github.com/Al3x-G/Task_Manager_App).
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [Al3x-G/Task_Manager_App](https://github.com/Al3x-G/Task_Manager_App).
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.


The Visual Studio Code preview extension was used to preview the website. To open this repository on Visual Studio Code:

+ Open an integrated terminal from the menu Terminal -> New Terminal
+ Clone the repo with the following command: git clone https://github.com/Al3x-G/Task_Manager_App
+ Change your terminal into that new subdirectory: cd Task_Manager_App
+ Open in Visual Studio Code: code .

## Credits
### Text Content
Text is written by the author https://github.com/Al3x-G

### Images
All images used were created by the author https://github.com/Al3x-G

### Code

All code was written by Alex Gordon working alongside Code Institute for support and guidance.

### Special mention

Code Institute for their continued support during this process of learning 