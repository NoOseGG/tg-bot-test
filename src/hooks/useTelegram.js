const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  const onBackButton = (isVisible) => {
    if (isVisible) {
      tg.BackButton.hide();
    } else {
      tg.BackButton.show();
    }
  };

  return {
    onClose,
    onToggleButton,
    onBackButton,
    tg,
    user: tg.initDataUnsafe?.user,
  };
}
