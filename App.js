import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Platform,
  BackHandler,
  Alert,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const scriptures = [
  {
    id: 1,
    title: 'Hanuman Chalisa',
    content: `॥ श्री हनुमान चालीसा ॥
श्रीगुरु चरन सरोज रज, निज मन मुकुर सुधारि।
बरनउँ रघुबर बिमल जसु, जो दायक फल चारि॥
बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।
बल बुद्धि विद्या देहु मोहिं, हरहु कलेस विकार॥

जय हनुमान ज्ञान गुन सागर।
जय कपीस तिहुँ लोक उजागर॥
रामदूत अतुलित बलधामा।
अंजनि-पुत्र पवनसुत नामा॥

महाबीर बिक्रम बजरंगी।
कुमति निवार सुमति के संगी॥
कंचन बरन बिराज सुबेसा।
कानन कुंडल कुंचित केसा॥

हाथ बज्र औ ध्वजा बिराजै।
काँधे मूँज जनेऊ साजै॥
शंकर सुवन केसरी नंदन।
तेज प्रताप महा जग वंदन॥

विद्यावान गुणी अति चातुर।
राम काज करिबे को आतुर॥
प्रभु चरित्र सुनिबे को रसिया।
राम लखन सीता मन बसिया॥

सूक्ष्म रूप धरि सियहिं दिखावा।
बिकट रूप धरि लंक जरावा॥
भीम रूप धरि असुर सँहारे।
रामचंद्र के काज सँवारे॥

लाय संजीवन लखन जियाए।
श्रीरघुबीर हरषि उर लाए॥
रघुपति कीन्ही बहुत बड़ाई।
तुम मम प्रिय भरतहि सम भाई॥

सहस बदन तुम्हरो जस गावैं।
अस कहि श्रीपति कंठ लगावैं॥
सनकादिक ब्रह्मादि मुनीसा।
नारद सारद सहित अहीसा॥

जम कुबेर दिगपाल जहाँ ते।
कवि कोविद कहि सके कहाँ ते॥
तुम उपकार सुग्रीवहिं कीन्हा।
राम मिलाय राजपद दीन्हा॥

तुम्हरो मंत्र बिभीषन माना।
लंकेश्वर भए सब जग जाना॥
जुग सहस्त्र जोजन पर भानू।
लील्यो ताहि मधुर फल जानू॥

प्रभु मुद्रिका मेलि मुख माहीं।
जलधि लाँघि गए अचरज नाहीं॥
दुर्गम काज जगत के जेते।
सुगम अनुग्रह तुम्हरे तेते॥

राम दुआरे तुम रखवारे।
होत न आज्ञा बिनु पैसारे॥
सब सुख लहै तुम्हारी सरना।
तुम रक्षक काहू को डर ना॥

आपन तेज सम्हारो आपै।
तीनों लोक हाँक ते काँपै॥
भूत पिशाच निकट नहीं आवै।
महाबीर जब नाम सुनावै॥

नासै रोग हरै सब पीरा।
जपत निरंतर हनुमत बीरा॥
संकट ते हनुमान छुड़ावै।
मन क्रम वचन ध्यान जो लावै॥

सब पर राम तपस्वी राजा।
तिनके काज सकल तुम साजा॥
और मनोरथ जो कोई लावै।
सोइ अमित जीवन फल पावै॥

चारों जुग परताप तुम्हारा।
है परसिद्ध जगत उजियारा॥
साधु संत के तुम रखवारे।
असुर निकंदन राम दुलारे॥

अष्ट सिद्धि नव निधि के दाता।
अस बर दीन जानकी माता॥
राम रसायन तुम्हरे पासा।
सदा रहो रघुपति के दासा॥

तुम्हरे भजन राम को पावै।
जनम जनम के दुख बिसरावै॥
अंत काल रघुबर पुर जाई।
जहाँ जन्म हरि-भक्त कहाई॥

और देवता चित न धरई।
हनुमत सेइ सर्ब सुख करई॥
संकट कटै मिटै सब पीरा।
जो सुमिरै हनुमत बलबीरा॥

जय जय जय हनुमान गोसाईं।
कृपा करहु गुरुदेव की नाई॥
जो सत बार पाठ कर कोई।
छूटहि बंदि महा सुख होई॥

जो यह पढ़ै हनुमान चालीसा।
होय सिद्धि साखी गौरीसा॥
तुलसीदास सदा हरि चेरा।
कीजै नाथ हृदय महँ डेरा॥

॥ दोहा ॥

पवन तनय संकट हरन, मंगल मूरति रूप।
राम लखन सीता सहित, हृदय बसहु सुर भूप॥`, // Add the full content here
  },
  {
    id: 2,
    title: 'Hanuman Ji Ki Aarti',
    content: 'आरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥...',
  },
  {
    id: 2,
    title: 'Hanuman Ji Ki Aarti',
    content: 'आरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥...',
  },
  {
    id: 2,
    title: 'Hanuman Ji Ki Aarti',
    content: 'आरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥...',
  },
  {
    id: 2,
    title: 'Hanuman Ji Ki Aarti',
    content: 'आरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥...',
  },
  {
    id: 2,
    title: 'Hanuman Ji Ki Aarti',
    content: 'आरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥...',
  },
  {
    id: 2,
    title: 'Hanuman Ji Ki Aarti',
    content: 'आरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥...',
  },
  {
    id: 2,
    title: 'Hanuman Ji Ki Aarti',
    content: 'आरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥...',
  },
  {
    id: 2,
    title: 'Hanuman Ji Ki Aarti',
    content: 'आरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥...',
  },
  {
    id: 3,
    title: 'Ganesh ji ki Arti',
    content: `जय गणेश जय गणेश,
जय गणेश देवा ।
माता जाकी पार्वती,
पिता महादेवा ॥

एक दंत दयावंत,
चार भुजा धारी ।
माथे सिंदूर सोहे,
मूसे की सवारी ॥

जय गणेश जय गणेश,
जय गणेश देवा ।
माता जाकी पार्वती,
पिता महादेवा ॥

पान चढ़े फल चढ़े,
और चढ़े मेवा ।
लड्डुअन का भोग लगे,
संत करें सेवा ॥

जय गणेश जय गणेश,
जय गणेश देवा ।
माता जाकी पार्वती,
पिता महादेवा ॥

अंधन को आंख देत,
कोढ़िन को काया ।
बांझन को पुत्र देत,
निर्धन को माया ॥

जय गणेश जय गणेश,
जय गणेश देवा ।
माता जाकी पार्वती,
पिता महादेवा ॥

सूर श्याम शरण आए,
सफल कीजे सेवा ।
माता जाकी पार्वती,
पिता महादेवा ॥

जय गणेश जय गणेश,
जय गणेश देवा ।
माता जाकी पार्वती,
पिता महादेवा ॥

दीनन की लाज रखो,
शंभु सुतकारी ।
कामना को पूर्ण करो,
जाऊं बलिहारी ॥

जय गणेश जय गणेश,
जय गणेश देवा ।
माता जाकी पार्वती,
पिता महादेवा ॥`,
  },
];

export default function App() {
  const [selectedBook, setSelectedBook] = React.useState(null);
  const [animation] = React.useState(new Animated.Value(0));

  const openBook = (book) => {
    setSelectedBook(book);
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const closeBook = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => setSelectedBook(null));
  };

  const handleBackButton = () => {
    if (selectedBook) {
      closeBook(); // Close the selected book if open
      return true; // Prevent default behavior (app exit)
    }
    Alert.alert(
      'Exit App',
      'Are you sure you want to exit?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false }
    );
    return true; // Prevent default behavior
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [selectedBook]);

  const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const getCurrentDay = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {selectedBook ? (
          <View style={styles.bookContainer}>
            {/* Back button positioned inside the safe area */}
            <TouchableOpacity onPress={closeBook} style={styles.dayButton}>
              <Text style={styles.dayButtonText}>{getCurrentDay()}</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.bookContentContainer}>
              <Animated.View style={[styles.book, { transform: [{ scale: 1.05 }] }]}>
                <Text style={styles.pageContent}>{selectedBook.content}</Text>
              </Animated.View>
            </ScrollView>
          </View>
        ) : (
          <>
            <Text style={styles.headerText}>{getCurrentDate()}</Text>
            <View style={styles.separator} />
            <ScrollView contentContainerStyle={styles.bookshelf}>
              {scriptures.map((book) => (
                <TouchableOpacity
                  key={book.id}
                  style={styles.bookFrame}
                  onPress={() => openBook(book)}
                >
                  <Text style={styles.bookTitle}>{book.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f5e7',
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f8f5e7',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4e342e',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20, // Adds extra space below the safe area
  },
  separator: {
    height: 1,
    backgroundColor: '#d3d3d3',
    marginVertical: 10,
  },
  bookshelf: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  bookFrame: {
    width: width * 0.4,
    height: height * 0.25,
    margin: 10,
    backgroundColor: '#ffd966',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6d4c41',
    textAlign: 'center',
  },
  bookContainer: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 20 : 10, // Ensures proper safe area usage
  },
  book: {
    width: width * 0.9,
    backgroundColor: '#fff7d6',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin:20,
    top:40,
    bottom:30,
  },
  bookContentContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingBottom: 90,
  },
  pageContent: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#4e342e',
  },
  dayButton: {
    position: 'absolute',
    top: 20, // Safe area adjustment
    left: 10,
    padding: 10,
    backgroundColor: '#ffd966',
    borderRadius: 5,
  },
  dayButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4e342e',
  },
});
