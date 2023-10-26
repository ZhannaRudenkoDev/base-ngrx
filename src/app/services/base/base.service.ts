import { Injectable } from '@angular/core';
import { delay } from '../../utils/base';

export interface IConnectionResponse {
  wallet: string,
  chainId: number
}

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  wallet: string;
  chainId: number;
  /**
   * Connect to provider emulation
   * @returns User wallet and chainId
   */
  public async connect(): Promise<IConnectionResponse> {
    // Emulate provider connection
    await delay(500)

    // Return mock data
    return {
      wallet: '0x75c1424ad9c1a236133d6b7b1146a07232c2774a09985546d0115562f1129e49',
      chainId: 56,
    }
  }


  async getWallet() {
    if (!this.wallet) {
      this.wallet = (await this.connect()).wallet
    }
    return this.wallet
  }

  async getChainId() {
    if (!this.chainId) {
      this.chainId = (await this.connect()).chainId
    }
    return this.chainId
  }

  async disconnect() {
    this.wallet = null
    this.chainId = null
  }
}
