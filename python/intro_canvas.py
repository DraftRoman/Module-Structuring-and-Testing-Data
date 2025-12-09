"""
This program implements an 'eraser' on a canvas. 

The canvas consists of a grid of blue 'cells' which are drawn 
as rectangles on the screen. We then create an eraser rectangle
which, when dragged around the canvas, sets all of the rectangles 
it is in contact with to white.
"""

"""
This is a worked example. This code is starter code; you should edit and run it to 
solve the problem. You can click the blue show solution button on the left to see 
the answer if you get too stuck or want to check your work!
"""

from graphics import Canvas
import time
    
CANVAS_WIDTH = 400
CANVAS_HEIGHT = 400

CELL_SIZE = 40
ERASER_SIZE = 20

def erase_objects(canvas, eraser):
    """Erases any objects that the eraser is touching on the canvas.

    Args:
        canvas (Canvas): The canvas containing the objects to erase.
        eraser (Rectangle): The rectangle representing the eraser.
    """
    eraser_left = canvas.get_left_x(eraser)
    eraser_top = canvas.get_top_y(eraser)
    eraser_right = eraser_left + ERASER_SIZE
    eraser_bottom = eraser_top + ERASER_SIZE

    # Get all objects currently on the canvas
    all_objects = canvas.get_all_objects()

    for obj in all_objects:
        if obj == eraser:
            continue  # Skip the eraser itself

        obj_left = canvas.get_left_x(obj)
        obj_top = canvas.get_top_y(obj)
        obj_right = obj_left + CELL_SIZE
        obj_bottom = obj_top + CELL_SIZE

        # Check for overlap between the eraser and the object
        if not (eraser_right < obj_left or
                eraser_left > obj_right or
                eraser_bottom < obj_top or
                eraser_top > obj_bottom):
            # There is an overlap; erase the object by setting its color to white
            canvas.set_color(obj, 'white')

# There is no need to edit code beyond this point

def main():
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    
    num_rows = CANVAS_HEIGHT // CELL_SIZE  # Figure out how many rows of cells we need
    num_cols = CANVAS_WIDTH // CELL_SIZE   # Figure out how many columns of cells we need
    
    # Make a grid of squares based on the number of rows and columns.
    # The rows and columns along with our cell size help determine where
    # each individual cell belongs in our grid!
    for row in range(num_rows):
        for col in range(num_cols):
            left_x = col * CELL_SIZE
            top_y = row * CELL_SIZE
            right_x = left_x + CELL_SIZE   # The right coordinate of the cell is CELL_SIZE pixels away from the left
            bottom_y = top_y + CELL_SIZE   # The bottom coordinate of the cell is CELL_SIZE pixels away from the top
            
            # Create a single cell in the grid
            cell = canvas.create_rectangle(left_x, top_y, right_x, bottom_y, 'blue')
            
            
    canvas.wait_for_click()  # Wait for the user to click before creating the eraser
    
    last_click_x, last_click_y = canvas.get_last_click()  # Get the starting location for the eraser
    
    # Create our eraser
    eraser = canvas.create_rectangle(
        last_click_x, 
        last_click_y, 
        last_click_x + ERASER_SIZE, 
        last_click_y + ERASER_SIZE, 
        'pink'
    )
    
    while True:
        # Move the eraser, and erase what it's touching
        
        mouse_x = canvas.get_mouse_x()
        mouse_y = canvas.get_mouse_y()
        canvas.moveto(eraser, mouse_x, mouse_y)
        
        erase_objects(canvas, eraser)  # We need to implement this!
        
        time.sleep(0.05)


if __name__ == '__main__':
    main()