const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  const onMainButton = (isVisible) => {
    if (isVisible) {
      tg.MainButton.show();
      tg.MainButton.onClick(() => {
        window.history.back();
      });
    } else {
      tg.MainButton.hide();
    }
  };

  const onBackButton = (isVisible) => {
    if (isVisible) {
      tg.BackButton.show();
    } else {
      tg.BackButton.hide();
    }
  };

  return {
    onClose,
    onMainButton,
    onBackButton,
    tg,
    user: tg.initDataUnsafe?.user,
  };
}
