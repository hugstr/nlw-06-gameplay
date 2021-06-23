import React from "react";
import { Fontisto } from "@expo/vector-icons";
import {
  ImageBackground,
  Text,
  View,
  FlatList
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";

import { styles } from "./styles";
import { theme } from "../../global/theme";
import BannerImg from "../../assets/banner.png";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Hugo",
      avatar_url: "http://github.com/hugstr.png",
      status: "online"
    },
    {
      id: "2",
      username: "Johnson",
      avatar_url: "http://github.com/nakahwra.png",
      status: "online"
    }
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
    </Background>
  )
}
