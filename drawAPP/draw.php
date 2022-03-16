<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="draw.css">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" />
      <title>Draw App 😎</title>
    </head>
    <body>

        <div class="menu">
            <div class=" brush">
                <button>
                    <i class="fa-solid fa-brush"></i>
                </button>
            </div>
            <div class="drip">   
                <button>
                    <i class="fa-solid fa-fill-drip"></i>
                </button>
            </div>
            <div class="paint">
                <button>
                    <i class="fa-solid fa-clone"></i>
                </button>
            </div>
            <div class="triangle">
                <button>
                    <i class="fa-solid fa-play"></i>
                </button>
            </div>
            <div class="square">
                <button>
                    <i class="fa-solid fa-vector-square"></i>
                </button>
            </div>
            <div class="circle">
                <button>
                    <i class="fa-solid fa-crosshairs"></i>
                </button>
            </div>
        </div>



        <svg>
            <circle r="50" cx="800" cy="500" fill="black"/>
        </svg>

        <div class="form">
            <form action="/action_page.php">
                <label for="fname">File name:</label><br>
                <input type="text" id="fname" name="fname" value="MySVG"><br>
                <input type="submit" value="Submit">
            </form> 
        </div>  
        
        <div class="fonction">    
            <div class="newone"> 
                <button>
                    <i class="fas fa-plus-square"></i>
                </button>
            </div>
            <div class="download">
                <button>
                    <i class="fa-solid fa-download"></i>
                </button>
            </div>
            <div class="upload">
                <button>
                    <i class="fa-solid fa-upload"></i>
                </button>
            </div>
            <div class="pdf">
                <button>
                    <i class="fa-solid fa-file-pdf"></i>
                </button>
            </div>
            <div class="image">
                <button>
                    <i class="fa-solid fa-image"></i>
                </button>
            </div>
        </div>
        <?php
        include("save.php");
        ?>
        <script src="draw.js"></script>
    </body>
</html>