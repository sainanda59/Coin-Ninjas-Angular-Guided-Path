import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoinDataService {
  constructor(private http: HttpClient) { }

  getSingleData(value:string,curr:string){
    return this.http.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr}&ids=${value}&price_change_percentage=24h%2C30d`);
  }
  
  getAllData(curr:string){
    return this.http.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr}&ids=thorchain%2Cneo%2Ckusama%2Czcash%2Cbittorrent%2Cblockstack%2Cpancakeswap-token%2Cmaker%2Cthe-graph%2Cflow%2Cgala%2Caave%2Charmony%2Ceos%2Ciota%2Cklay-token%2Chelium%2Cmonero%2Ctheta-token%2Celrond-erd-2%2Cfilecoin%2Ctezos%2Caxie-infinity%2Cvechain%2Cethereum-classic%2Chedera-hashgraph%2Cthe-sandbox%2Cinternet-computer%2Cfantom%2Cdecentraland%2Cstellar%2Cbitcoin-cash%2Cftx-token%2Calgorand%2Ctron%2Cuniswap%2Cchainlink%2Ccosmos%2Clitecoin%2Cdai%2Cterrausd%2Cwrapped-bitcoin%2Ccrypto-com-chain%2Cmatic-network%2Cbinance-usd%2Cdogecoin%2Cshiba-inu%2Cbitcoin%2Cethereum%2Ctether%2Cbinancecoin%2C%20usd-coin%2Cripple%2Ccardano%2Csolana%2Cterra-luna%2Cpolkadot%2Cavalanche-2%2C&price_change_percentage=24h%2C30d`);
}
}
