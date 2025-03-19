import { Meta, StoryObj } from "@storybook/angular";
import { ForLoopComponent } from "../../app/components/for-loop/for-loop.component";

const meta: Meta<ForLoopComponent> = {
    title: '@for loop',
    component: ForLoopComponent,
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    args: {
    },
  };

  export default meta;
type Story = StoryObj<ForLoopComponent>;

export const Default: Story = {
    args: {
      iterableItem: [
        {a: 1},
        {b: 2}
      ]
    },
  };