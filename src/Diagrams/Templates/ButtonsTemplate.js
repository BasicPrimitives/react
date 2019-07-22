import AbstractTemplate from './AbstractTemplate';

class ButtonsTemplate extends AbstractTemplate {
  render(data) {
    const { onButtonsRender } = data;
    return onButtonsRender(data);
  };
};

export default ButtonsTemplate;
