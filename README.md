# Predux: Message Passing

## SWBATs
- [ ] Explain the concept of message passing
- [ ] Identify examples of message passing
- [ ] Use message passing to control program flow
- [ ] Explain how message passing could be used to manage state

## Notes
[Wiki: Message Passing](https://en.wikipedia.org/wiki/Message_passing)

```ruby
 puts "1. See all dogs"
 puts "2. Create a new dog"
 puts "3. Change a dog's name"
 puts "4 .Exit Program"

 user_input = gets.chomp
 router(user_input)

def router(user_input, data)
 switch(user_input):
  case 1:
    see_all_dogs
  case 2:
    create_a_dog(data)
  case 3:
    change_doggos_name
  case 4:
    exit
  default:
    return
  end
end 

  def create_a_dog(name)
    Dog.new(name: name)
  end
```


```ruby
resources :dogs, only: [:index, :show, :create]

get "/dogs", to: "dogs#index"
get "/dogs/:id", to: "dogs#show"
post "/dogs", to: "dogs#create"

```


# The rules of Message Passing
1. We need to know what action are we about to take (i.e. which user input)
2. Additional may need to be sent... 🤷‍♂
3. We need to know the previous state


### What is message passing?
```
"Message passing is a technique for invoking behavior (i.e., running a program) on a computer. In contrast to the traditional technique of calling a program by name, message passing uses an object model to distinguish the general function from the specific implementations. The invoking program sends a message and relies on the object to select and execute the appropriate code." -Wikipedia
```

Message passing is built on the idea of centralization of program flow: all program flows pass through **one** central function, which in turn invokes the desired functionality. In order to do this, the central function needs to be told 2 things: **a type** which tells the central function which function to call, and, because functions sometimes need data, **a payload** which contains all of the data needed to run the desired function (usually an object).

### Three Ingredients
1. Some sort of type of thing you want to do + some sort of routing (e.g. case statement in CLI)
2. Some way of getting data into your router (e.g. in API design, think params)
3. The old state

### Examples of message passing

- Ruby CLIs
```rb
def router(choice, data)
  case choice
  when 1
    print_turtles
  when 2
    new_turtle
  when 3
    select_turtle
  when 4
    create_turtle(data)
  when 5
    delete_turtle(data)
  end

  menu
end

```
- Routing + Controllers
```rb
class TurtlesController < ApplicationController
  def index
    # ...
  end

  def new
    # ...
  end

  def create
    # ...
  end
  
  # etc.
end

# routes.rb
get "/turtles", to: "turtles#index"
get "/turtles/new", to: "turtles#new"
post "/turtles", to: "turtles#create"
```