class Box {
    // Properties are always global in nature
    // Parameters or arguments are local in nature
    constructor ( x, y, w ,h, c ){

        this. width= w
        this.height= h
        this.color= c
        this.body= B.rectangle(x, y, w, h)
        W.add( earth, this.body)
        

    }

     
    appear(){

        var pos= this.body.position
        var a= this.body.angle

        push ()
        translate (pos.x, pos.y)
        rotate (a)
        fill ( this.color )
        rectMode (CENTER)
        rect (0, 0, this.width, this.height )
        console.log(this.body.angle)
        pop ()
    }






}