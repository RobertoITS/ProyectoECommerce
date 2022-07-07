import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/model/Product';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  //Creamos la lista que agrega los productos al carrito
  add: Product[] = []

  @Input() name: String = ""
  @Input() description: String = ""
  selectedColor = "#FFFFFF"
  colors = [
    {
      hex: '#00759A',
      name: 'Blue',
    },
    {
      hex: '#F7941D',
      name: 'Orange',
    },
    {
      hex: '#A71930',
      name: 'Red',

    },
    {
      hex: '#679146',
      name: 'Green',

    }
  ]
  //Instanciamos el escuchador del link y el snack bar
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar, //Snack bar de material
    public dialog: MatDialog
    ) {}

  //Instanciamos el snack bar y lo creamos, con una duracion de 3000 milisegundos.
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
    //this.dialogRef.close() //Aca va el close
  }

  //Una funcion que guarda los productos en la lista, guardada en la memoria local
  addCart(){
    const product: Product = { url: '', description: this.description, name: this.name, type:'' }
    this.add.push(product)
    localStorage.setItem('cart', JSON.stringify(this.add))
    console.log('Added');
    this.openSnackBar("Agregado al carrito", "Deshacer")
  }

  ngOnInit(): void {
    //Cada vez que se active, actualiza los datos
    this._activatedRoute.paramMap.subscribe(()=>
      this.selectedColor = "#FFFFFF"
    )
  }

  openDialog(): void {
    //this.dialogRef.openDialog()
    const dialogRef = this.dialog.open(DialogComponent, {
      //width: '250px'
     })
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res){
        this.addCart()
      }
    })
  }

}
