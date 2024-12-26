import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';

const NewsDetailsPage = () => {
	const  id  = useSearchParams();

	return (
		<View>
			<Stack.Screen options={{ headerTitle: `News #${id}` }} />

			<Text>My News: {id} </Text>
		</View>
	);
};

export default NewsDetailsPage;