import {Stack} from 'expo-router';

export default function MainLayout(){
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='(auth)/signup/page.tsx'
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='(panel)/profile/page.tsx'
        options={{headerShown: false}}
      />
    </Stack>
  )
}