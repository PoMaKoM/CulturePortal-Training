export default {
  title: 'Typography',
};

// tslint:disable-next-line: typedef
export const toH1 = () => ({
  template: `<h1 style="font-family: MontserratMedium">Monsterrat h1</h1>
  <h1 style="font-family: Roboto">Roboto h1</h1>`,
  props: {},
});

toH1.story = {
  name: 'Header h1',
};

export const ToH2 = () => ({
  template: `<h2 style="font-family: MontserratMedium">Monsterrat h2</h2>
  <h2 style="font-family: Roboto">Roboto h2</h2>`,
  props: {},
});

ToH2.story = {
  name: 'Header h2',
};

export const ToH3 = () => ({
  template: `<h3 style="font-family: MontserratMedium">Monsterrat h3</h3>
  <h3 style="font-family: Roboto">Roboto h3</h3>`,
  props: {},
});

ToH3.story = {
  name: 'Header h3',
};

export const ToH4 = () => ({
  template: `<h4 style="font-family: MontserratMedium">Monsterrat h4</h4>
  <h4 style="font-family: Roboto">Roboto h4</h4>`,
  props: {},
});

ToH4.story = {
  name: 'Header h4',
};

export const ToH5 = () => ({
  template: `<h5 style="font-family: MontserratMedium">Monsterrat h5</h5>
  <h5 style="font-family: Roboto">Roboto h5</h5>`,
  props: {},
});

ToH5.story = {
  name: 'Header h5',
};

export const ToH6 = () => ({
  template: `<h6 style="font-family: MontserratMedium">Monsterrat h6</h6>
  <h6 style="font-family: Roboto">Roboto h6</h6>`,
  props: {},
});

ToH6.story = {
  name: 'Header h6',
};

export const ButtonText = () => ({
  template: `<span style="font-family: Roboto,Helvetica Neue,sans-serif;
              font-size: 14px;
              font-weight: 500;">Button text!</span>`,
  props: {},
});

ButtonText.story = {
  name: 'Button text',
};

export const DescriptionText = () => ({
  template: `<span style="font-family: Roboto;
              font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</span>`,
  props: {},
});

DescriptionText.story = {
  name: 'Description text',
};

export const HeaderButtonText = () => ({
  template: `<span style="font-family: MontserratMedium;
              font-size: 14px;">HEADER BUTTON TEXT</span>`,
  props: {},
});

HeaderButtonText.story = {
  name: 'Header button text',
};

export const CustomText = () => ({
  template: `<span style="ffont-family: Roboto,Helvetica Neue,sans-serif;
              font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</span>`,
  props: {},
});

CustomText.story = {
  name: 'Custom text',
};
