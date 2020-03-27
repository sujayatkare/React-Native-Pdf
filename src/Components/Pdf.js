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
  const [lastPageSeen, setlastPageSeen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const _onLoadComplete = numberOfPages => {
    setPdfLoaded(true);
    setTotalPages(numberOfPages);
  };

  const _onPageChanged = (currentPage, numberOfPages) => {
    setCurrentPage(currentPage);
    if (currentPage === numberOfPages) {
      setlastPageSeen(true);
    }
  };

  const updatePageCount = (operation: 'increment' | 'decrement') => () => {
    const updatePage =
      operation === 'increment' ? currentPage + 1 : currentPage - 1;
    pdfRef.current.setPage(updatePage);
  };

  return (
    <View style={styles.container}>
      <Text style={{justifyContent: 'flex-start', marginTop: 20}}>
        {currentPage}
      </Text>
      <Pdf
        ref={pdfRef}
        source={source}
        horizontal={true}
        fitWidth={true}
        enablePaging={true}
        onLoadComplete={_onLoadComplete}
        onPageChanged={_onPageChanged}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link Pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
      {pdfLoaded && (
        <View style={{flexDirection: 'row'}}>
          <Button
            onPress={updatePageCount('decrement')}
            disabled={currentPage === 1}
            title="Previous Page"
          />
          <Button
            onPress={updatePageCount('increment')}
            disabled={currentPage === totalPages}
            title="Next Page"
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
