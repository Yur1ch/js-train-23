class BankTransfer {
  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount);
    console.log(`Ініціюємо банківський переказ: $${calculatedAmount}`);
  }

  calculateFee(amount) {
    return amount * 1.02;
  }
}

class WalletTransfer {
  processTransfer(amount) {
    console.log(`Здійснюємо переказ з гаманця: $${amount}`);
  }
}

class TransferAdapter {
  constructor(transferSystem) {
    this.transferSystem = transferSystem;
  }

  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount);
    this.transferSystem.processTransfer(calculatedAmount);
  }

  calculateFee(amount) {
    return amount * 1.2;
  }
}

console.log("Завдання 5 ====================================");

const purchase1 = new BankTransfer();
purchase1.initiateTransfer(1000);

const purchase2 = new BankTransfer();
purchase2.initiateTransfer(10);

const walletTransfer = new WalletTransfer();

const walletTransferAdapter = new TransferAdapter(walletTransfer);

walletTransferAdapter.initiateTransfer(200);

