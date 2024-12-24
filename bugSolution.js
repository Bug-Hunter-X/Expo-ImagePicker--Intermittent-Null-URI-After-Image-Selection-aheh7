// bugSolution.js
import * as ImagePicker from 'expo-image-picker';

async function pickImage() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    if (result.uri) {
      // Access the image URI
      console.log('Image URI:', result.uri);
      // Use the result.uri here
    } else {
      console.error('Image URI is null or undefined. Retrying...');
      // Retry mechanism (optional but suggested):
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
      result = await ImagePicker.launchImageLibraryAsync({...}); //Retry the picker
      if(result.uri){
        console.log('Image URI (after retry):', result.uri);
      } else{
        console.error('Retry failed. Image URI still null or undefined.');
      }
    }
  } else {
    console.log('Cancelled');
  }
}

pickImage();