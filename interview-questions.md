# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Depends on the order in which the models were made. If Cohort was made first then all that's need to be done is create the Student model with the foreign key of cohort_id. Then the creation of the student just needs to be in the form of making the Cohort you want the student to be apart of as a variable. Allowing an id to be made prior, then add the model name along with the create command with the necessary attributes. This will create a student with the foreign key of the Cohort that was used to make the student. The variable for the cohort will use the find command and primary key to locate a hash instead of getting an array which is not useful in or case. If student was made first without the foreign key then all we need is a migration command outside of the rails console. Then add the neccessary changes with the command add column with the model name, cohort id, and integer data type. Then we migrate the change into the database. Go back into the rails console then create the student with the associated cohort as stated before.

Researched answer: A schema has nothing in the beginning. Each migration adds and removes columns, entries, and tables. It is an easy way to change the database schema over time. Rails use timestamps to dictate what migrations to run and in what order.

2. Which RESTful routes must always be passed params? Why?

Your answer: I am not to sure on which specific RESTful routes require the params. However, I do recall that the show route requires it to locate what instance in the database the user is looking at. The create route requires params in order to pass in the neccessary arguments in order to make a new instance into the database via what the user inputs. The update and edit routes also require params in order to locate which instances in the database are going to be changed with new information. The destroy route needs the params in order to locate the proper instance or information to delete.

Researched answer: Params are information that is sent from the client to the server to gain ascertain exactly what the client wishes to do. As stated before, show, edit, update, destroy and create all require params. This is because their operation is soley based on what the client sends to the server. If the client wanted to see index, no params are necessary since all the info in the database will be shown to them. If show were to be called upon, a param is necessary since the client is requesting a specific piece of information.

3. Name three rails generator commands. What is created by each?

Your answer: They are rails g model, rails g controller, and rails g migration. Model is used to create a table in the database where instances are made within the table following the attributes that are dictated by the model. Controller is used to create a class in which methods can be defined to function from requests made by users. Migration is used to add changes to already made tables within the database. An example of a model is creating one called car, where the attributes are wheels, make, and model. For the attributes, we would define what datatypes are taken such as wheels with integer, make with string, and model with string. Once the model is made we can create an instance allowing the empty table to be full of different instances of cars. An example of migration is forgetting to add the number of doors the car has so we can do the migration of doors with the datatype integer. The corresponding table would be car and we would do add column in the migration to show what we are doing to the car table. Then migrate command to conduct the changes.
 
Researched answer: Generator commands allow developers to save a lot of time since it writes the boilerplate code necessary for the app to work for us. There are more generator commands than just the controller, model, and migration. They able to be found in generator gems that can be found from the web. They all have their uses. Such as scaffold, it is able to create the models, views, and controllers all by itself. Other commands are assets, channel, helper, integration_test, jbuilder, etc.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
index
action: "POST" location: /students
create
action: "GET" location: /students/new
new
action: "GET" location: /students/2
show
action: "GET" location: /students/2/edit
edit
action: "PATCH" location: /students/2
update
action: "DELETE" location: /students/2
destroy
5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

I want an application named ToDoList.

I want a model named list

I want to see the name and time of each instance.

I want to see that there is another table with over-arching themes for the instances in list.

I want to be able to call the over-arching themes and see the instances in list that are associated.

I want to add another column in list where the date is displayed.

I want to see another table created so that the chores can separated by the months.

I want to be able to call a month and see the chores due that month.

I want to be able to see the different keys associated with one chore.

I want to be able to put the chores that are completed in another table and no longer see it in the original list.
----------------------------------------------
As a busy man, I want something that can tell me what I have to do so that I can just focus on the tasks at hand.

I want it to be day by day so that I know what needs to be done each day of the week.

I want the list to have a priority level to know the which tasks are urgent and which can be held off.

I want to know if some tasks can be completed alongside other tasks to be as efficient as possible.

I want to be able to move the tasks or correlate it to a done list so that I can marvel at what I accomplished so far. 

I want a date and name on each of the tasks to know what each task is and how far the deadline is for each task.

Say I named one task the same as another since it is a task that occurs on a weekly basis like washing the car. I want to be able to differentiate between both.

There should also be an associated daily schedule of tasks like brushing teeth, putting on clothes for everyday of the week.

I pay child support and also want to know which day of the month I have to do so.

Coming up with ten user stories is hard so I need an AI to do it for me.