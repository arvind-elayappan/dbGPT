# Prompts

**Prompt** is a very important part of the interaction between the large model and the user, and to a certain extent, it determines the quality and accuracy of the answer generated by the large model. In this project, we will automatically optimize the corresponding Prompt according to user input and usage scenarios, making it easier and more efficient for users to use large language models.

## Prompt Management

Here, you can choose to create a Prompt in **Public Prompts** space or **Private Prompts** space.

<img width="1657" alt="image" src="https://github.com/eosphoros-ai/DB-GPT/assets/44772254/64d3b666-b8da-48f4-85fe-bf128381c715">

The difference between **Public Prompts** and **Private Prompts** is that Prompts in **Public Prompts** space can be viewed and used by all users, while prompts in **Private Prompts** space can only be viewed and used by the owner.

### Create Prompt

Click the "Add Prompts" button to pop up the following subpage:

<img width="1658" alt="image" src="https://github.com/eosphoros-ai/DB-GPT/assets/44772254/18fac6df-e050-4e41-aac9-bb4a4728a79b">

**Scene**: It is assumed here that when we have a lot of Prompts, we often classify the Prompts according to scene, such as Prompts in the chat knowledge scene, Prompts in the chat data scene, Prompts in the chat normal scene, etc.

**Sub Scene**: Continuing with the above, assuming that we have a lot of Prompts, scene classification alone is not enough. For example, in the chat data scenario, there can be many types of sub-scene: anomaly recognition sub scene, attribution analysis sub scene, etc. sub scene is used to distinguish subcategories under each scene.

**Name**: Considering that a Prompt generally contains a lot of content, for ease of use and easy search, we need to name the Prompt. Note: The name of the Prompt is not allowed to be repeated. Name is the unique key that identifies a Prompt.

**Content**: Here is the actual Prompt content that will be input to LLM.

### Edit Prompt

Existing Prompts can be edited. Note that except **name**, other items can be modified.

<img width="1881" alt="image" src="https://github.com/eosphoros-ai/DB-GPT/assets/44772254/28c66fdb-0dd4-48d1-8604-211b4cced8b6">

### Delete Prompt

Ordinary users can only delete Prompts created by themselves in the private Prompts space. Administrator users can delete Prompts in public Prompts spaces and private Prompts spaces.


## Use Prompt

Users can find and use Prompts next to the input boxes in each scene. Click to view all contents of Prompts library.

✓ Hover the mouse over each Prompt to preview the Prompt content.  
✓ Click Prompt to automatically fill in the Prompt content in the input box.

<img width="1907" alt="image" src="https://github.com/eosphoros-ai/DB-GPT/assets/44772254/f63999bc-6b7b-439f-81b7-b9271e65b17b">  
<img width="1902" alt="image" src="https://github.com/eosphoros-ai/DB-GPT/assets/44772254/414ab0db-b961-487f-99a8-1edf8f173ebc">