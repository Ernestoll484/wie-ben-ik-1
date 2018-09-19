body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: pink;
    color: white;
}

/* Container */
.container {
    width: 80%;
    overflow: hidden;
    margin: auto;
}


/* Important */
.important {
    color: crimson;
}



/* Image */
#image {
    margin-top: 50px;
}

#image img {
    border-radius: 100%;
    width: 35%;
}



/* About */
#about {
    margin-top: 20px;
}

#about p {
    line-height: 1.5;
    width: 40%;
    text-align: left;
    display: block;
}



/* Social */
#social {
    margin-top: 30px;
}

#social a {
    padding: 0 20px 0 20px;
    text-decoration: none;
    color: crimson;
}

#social a i:hover {
    color: white;
    transition: .3s;
}



/* Media Queries */
@media screen and (min-width: 320px) and (max-width: 812px) {
    #about p{
        width: 200px;
    }


    #social a {
        font-size: 12px;
        margin-bottom: 50px;
    }

    #image img {
        width: 55%
    }
}