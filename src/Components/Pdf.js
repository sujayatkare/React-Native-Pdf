import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, Button, Alert} from 'react-native';
import Pdf from 'react-native-pdf';

import Header from '../common/Header';

const source = {
  uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
  cache: true,
};

const ReactBook = ({navigation}) => {
  const pdfRef = useRef(null);
  const [presentPage, setPresentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pdfLoaded, setPdfLoaded] = useState(false);

  const onPdfLoaded = numberOfPages => {
    setPdfLoaded(true);
    setTotalPages(numberOfPages);
  };

  const onPdfPageChanged = (page, numberOfPages) => {
    setPresentPage(page);
  };

  const incrementPageCount = () => {
    const update = presentPage + 1;
    pdfRef.current.setPage(update);
  };

  const decrementPageCount = () => {
    const update = presentPage - 1;
    pdfRef.current.setPage(update);
  };

  return (
    <View style={styles.container}>
      <Text style={{marginTop: 20}}>{presentPage}</Text>
      <Pdf
        ref={pdfRef}
        source={source}
        horizontal={true}
        fitWidth={true}
        enablePaging={true}
        onLoadComplete={onPdfLoaded}
        onPageChanged={onPdfPageChanged}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link Pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
      {pdfLoaded && (
        <View>
          <Button
            title="Previous Page"
            onPress={decrementPageCount}
            disabled={presentPage === 1}
          />
          <Button
            title="Next Page"
            onPress={incrementPageCount}
            disabled={presentPage === totalPages}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default ReactBook;
