import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface StayCardProps {
  stay: {
    id: number;
    name: string;
    img: string;
    rating: number;
    price: number;
    location: string;
  };
}
const StayCard = ({ stay }: StayCardProps) => {
  return (
    <View style={styles.container}>
      <Link
        href={{
          pathname: "/(tabs)/home/[stayId]",
          params: { stayId: stay.id },
        }}
        asChild
      >
        <TouchableOpacity>
          <Image source={{ uri: stay.img }} style={styles.image} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default StayCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});
