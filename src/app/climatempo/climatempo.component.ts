import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-climatempo',
  templateUrl: './climatempo.component.html',
  styleUrls: ['./climatempo.component.css']
})
export class ClimatempoComponent implements OnInit {

  public connection: boolean = false;

  //Strings
  public dev: string;
  public date: any;
  public anoAtual: number;
  public universidadeCurso: string;

  //Conexões
  public weatherData: any;

  public FilterForm: FormGroup;
  public cbCidadeControl: FormControl;

  constructor(
    private weatherService: WeatherService
    ){
    this.dev = "Gabriel dos Santos Peixoto";
    this.date = new Date()
    this.anoAtual  = this.date.getFullYear();
    this.universidadeCurso = "Engenharia de Computação - UJ"
  }

  ngOnInit(){
    this.cbCidadeControl = new FormControl();
    this.FilterForm = new FormGroup({
      cbCidade: this.cbCidadeControl
    });

    this.cbCidadeControl.valueChanges.subscribe(async (value) => {
      this.GetDataTempo(value);
      this.connection == true;
    });
  }

  //Inicializar formulário
  public InitializeFormFilter(): void {
    this.FilterForm = new FormGroup({
      cbCidade: new FormControl("salvador, br")
    });
  }


  // GET Previsão do Tempo
  public async GetDataTempo(cbCidade: string): Promise<void> {
    try {
      this.weatherService.getWeather(cbCidade).subscribe(
        (data) => {
          this.weatherData = data;
          console.log(this.weatherData);
        },
        (error) => {
          console.error('Erro ao obter dados da previsão do tempo:', error);
        }
      );
    } catch (error) {
      console.error('Ocorreu um erro ao processar a solicitação:', error);
    }
  }

}
