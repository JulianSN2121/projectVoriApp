import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mapIcon: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  slider: {
    flexDirection: 'row',
    padding: 10,
  },
  sliderItem: {
    width: 250,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginRight: 10,
  },
  sliderItemText: {
    fontSize: 18,
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sliderContainer: {
    marginTop: 20,
  },
  slider: {
    paddingLeft: 20,
  },
  sliderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
});