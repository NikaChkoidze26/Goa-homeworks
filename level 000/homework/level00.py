from turtle import *

speed(15)

width(5)
color("blue")
forward(200)
left(90)


forward(200)
left(90)
forward(200)
left(90)


forward(200)
left(90)

#start of door

forward(70)
color("red")

begin_fill()
left(90)
forward(100)
right(90)
forward(60)
right(90)
forward(100)
end_fill()
#end of door

penup()
goto(200, 200)
pendown()
color("light green")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#start of window 1
penup()
goto(30, 130)
pendown()
color("brown")
left(120)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(20)
left(90)
forward(40)
right(90)
forward(20)
right(90)
forward(20)
right(90)
forward(40)
#end of window 1

#start of window 2
penup()
goto(130, 130)
pendown()
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
left(180)
forward(20)
left(90)
forward(40)
right(90)
forward(20)
right(90)
forward(20)
right(90)
forward(40)

exitonclick()
