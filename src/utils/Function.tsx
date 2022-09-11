declare let window: any;
export const connectMetaMask = async (setmetamask: any) => {
  const { ethereum } = window;
  try {
    if (!ethereum) {
      alert("Please! Connect Metamask");
      return;
    }
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setmetamask(accounts[0]);
  } catch (err) {
    console.log(err);
  }
};
