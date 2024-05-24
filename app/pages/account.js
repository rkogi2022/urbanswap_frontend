import CustomPressableButton from '@/components/customButton';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity } from 'react-native'; // Import Text from react-native
import * as SecureStore from 'expo-secure-store';
import { Path, Svg } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { checkTokens } from '@/functions/ValidateAuthentication';



const AccountPage = () => {
    const navigation = useNavigation();

    useEffect(() => {
        checkAndRedirect();
    }, []);


    const checkAndRedirect = async () => {
        const hasTokens = await checkTokens();
        if (!hasTokens) {
            navigation.navigate('LoginScreen');
        }
    };


    const navigateToUrbanWallet = () =>{
        navigation.navigate('UrbanWallet'); 
    }

    const logout = async () => {
        try {
            // Clear the token
            await SecureStore.deleteItemAsync('authToken');
            // Navigate the user to the login screen
            navigation.navigate('LoginScreen');
        } catch (error) {
            console.error('Error logging out:', error);
            // Handle error if necessary
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.driverSection}>
                    <Text>Ms Kogi</Text>
                    <View style={styles.ratingContainer}>
                        <Svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.35181 0.421661L8.94212 3.90115C8.95815 3.93835 8.98392 3.97052 9.0167 3.9943C9.04949 4.01808 9.08808 4.03257 9.12841 4.03626L12.929 4.47354C13.0541 4.48729 13.1727 4.53686 13.2703 4.61631C13.368 4.69577 13.4406 4.80172 13.4796 4.92145C13.5185 5.04118 13.522 5.1696 13.4898 5.29129C13.4575 5.41299 13.3908 5.52278 13.2977 5.6075L10.48 8.19486C10.4494 8.22158 10.4266 8.25608 10.414 8.29472C10.4014 8.33336 10.3994 8.37469 10.4084 8.41433L11.167 12.164C11.1927 12.2872 11.1823 12.4152 11.1369 12.5326C11.0916 12.65 11.0133 12.7518 10.9115 12.8257C10.8097 12.8997 10.6887 12.9426 10.563 12.9494C10.4373 12.9561 10.3124 12.9264 10.2032 12.8639L6.87145 10.9837C6.83638 10.9633 6.79655 10.9526 6.75601 10.9526C6.71546 10.9526 6.67564 10.9633 6.64057 10.9837L3.30804 12.8639C3.19885 12.9263 3.07397 12.9558 2.9484 12.949C2.82283 12.9421 2.7019 12.8992 2.60015 12.8253C2.4984 12.7514 2.42014 12.6496 2.37479 12.5324C2.32943 12.4151 2.3189 12.2872 2.34446 12.164L3.10298 8.41433C3.11197 8.37469 3.11005 8.33336 3.09745 8.29472C3.08484 8.25608 3.06201 8.22158 3.03138 8.19486L0.21434 5.6072C0.121079 5.52254 0.0542604 5.41274 0.0219187 5.29101C-0.0104229 5.16928 -0.00691023 5.0408 0.0320343 4.92101C0.0709789 4.80123 0.143697 4.69525 0.241444 4.61581C0.339191 4.53637 0.457804 4.48686 0.58302 4.47324L4.38421 4.03596C4.42454 4.03227 4.46313 4.01778 4.49591 3.994C4.5287 3.97022 4.55447 3.93805 4.5705 3.90085L6.16021 0.421661C6.21179 0.306811 6.29548 0.209319 6.40118 0.140921C6.50688 0.0725223 6.63011 0.0361328 6.75601 0.0361328C6.88191 0.0361328 7.00513 0.0725223 7.11084 0.140921C7.21654 0.209319 7.30022 0.306811 7.35181 0.421661Z" fill="#F7D000" />
                        </Svg>

                        <Text style={styles.ratingText}> 4.5</Text>
                    </View>

                </View>

                <Image
                    source={require('../../assets/images/driver.png')}
                    style={styles.image}
                />
            </View>

            <View style={styles.secondSection}>
                <View style={styles.helpSection}>
                    <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M23.7458 33.4352C24.1406 33.2887 24.5804 33.4891 24.727 33.884C24.8736 34.2789 24.6731 34.7186 24.2782 34.8652C20.2051 36.3864 15.8165 36.3386 11.8977 34.928C8.03552 33.5385 4.62523 30.8266 2.41425 26.9974L2.38882 26.9495C-0.0732424 22.6566 -0.571346 17.7728 0.614828 13.3409C1.80697 8.8925 4.69676 4.89864 9.00002 2.41425L9.04789 2.38882C13.3408 -0.0732424 18.2246 -0.571346 22.6565 0.614828C27.1049 1.80697 31.0988 4.69676 33.5831 9.00002L33.6086 9.04789C35.7984 12.8666 36.4341 17.1566 35.7102 21.1773C34.9727 25.2787 32.8203 29.1034 29.4651 31.8707C29.1405 32.1385 28.6589 32.0921 28.3911 31.766C28.1234 31.4414 28.1698 30.9598 28.4958 30.692C29.8061 29.6121 30.916 28.3556 31.809 26.978L27.1856 24.2003C26.2732 25.5525 25.0466 26.7237 23.5374 27.5958C22.0296 28.4663 20.4022 28.942 18.7762 29.0557L18.8704 34.448C20.5113 34.3627 22.1551 34.0306 23.745 33.4353L23.7458 33.4352ZM13.1197 27.9503L10.3391 32.5798C11.0092 32.9313 11.7032 33.2364 12.4137 33.4922C13.9948 34.0606 15.6596 34.3882 17.3454 34.457L17.2511 29.057C16.5331 29.0077 15.8241 28.8895 15.1316 28.704C14.4405 28.5186 13.7659 28.2659 13.1197 27.9503ZM9.01978 31.8078L11.7975 27.1844C10.4453 26.272 9.27408 25.0455 8.40202 23.5362C7.53149 22.0285 7.05582 20.4011 6.94213 18.775L1.55138 18.8692C1.68151 21.3702 2.38454 23.8771 3.71427 26.1941L3.7367 26.23C5.0814 28.5589 6.90928 30.436 9.01986 31.8061L9.01978 31.8078ZM17.2212 6.94173L17.1269 1.55097C14.626 1.6811 12.1191 2.38413 9.80206 3.71386L9.76616 3.7363C7.43723 5.081 5.56169 6.90887 4.19122 9.02098L8.81307 11.7972C9.72549 10.445 10.952 9.27379 12.4613 8.40172C13.969 7.53119 15.5964 7.05553 17.2225 6.94184L17.2212 6.94173ZM18.6541 1.54178L18.7484 6.9402C19.4664 6.98956 20.1754 7.10772 20.8679 7.2932C21.559 7.47868 22.2336 7.73145 22.8797 8.0471L25.6604 3.41912C24.5775 2.8522 23.4377 2.40798 22.2635 2.09238C21.0878 1.77676 19.8777 1.59129 18.6571 1.54193L18.6541 1.54178ZM26.9765 4.18933L24.2004 8.81118C25.5525 9.72361 26.7237 10.9501 27.5958 12.4594C28.4663 13.9671 28.942 15.5945 29.0557 17.2206L34.448 17.1264C34.3178 14.6269 33.6133 12.1201 32.2836 9.8015L32.2612 9.7641C30.9164 7.43518 29.0887 5.5598 26.9765 4.18933ZM34.4554 18.6522L29.0554 18.7465C29.0061 19.4645 28.8879 20.1735 28.7024 20.866C28.5169 21.5571 28.2642 22.2317 27.9485 22.8778L32.578 25.66C33.3618 24.1657 33.9093 22.5622 34.2069 20.9079C34.3401 20.1645 34.4238 19.4107 34.4537 18.6538L34.4554 18.6522ZM3.41926 10.3371C2.85235 11.4201 2.40812 12.5599 2.09252 13.734C1.77691 14.9097 1.59143 16.1198 1.54207 17.3404L6.94049 17.2462C6.98985 16.5282 7.10801 15.8192 7.29349 15.1266C7.47897 14.4356 7.73175 13.761 8.04739 13.1148L3.41941 10.3341L3.41926 10.3371ZM20.4711 8.76952C18.1078 8.13682 15.5035 8.40455 13.2194 9.72234C10.9368 11.0401 9.40362 13.1612 8.77096 15.5228C8.13826 17.8862 8.40599 20.4905 9.72378 22.7746C11.0416 25.0571 13.1626 26.5903 15.5243 27.223C17.8876 27.8557 20.4919 27.5879 22.776 26.2701C25.0586 24.9524 26.5917 22.8313 27.2244 20.4697C27.8571 18.1063 27.5894 15.502 26.2716 13.2179C24.9538 10.9354 22.8328 9.40218 20.4711 8.76952ZM26.288 32.2249C26.653 32.014 27.1212 32.1382 27.3321 32.5032C27.543 32.8681 27.4189 33.3363 27.0539 33.5472L26.9387 33.6145C26.5738 33.8254 26.1056 33.7013 25.8947 33.3363C25.6838 32.9713 25.8079 32.5032 26.1729 32.2922L26.288 32.2249Z" fill="white" />
                    </Svg>

                    <Text style={styles.section2Text}>Help</Text>
                </View>
                <TouchableOpacity onPress={navigateToUrbanWallet}>
                <View style={styles.walletSection}>
                    <Svg width="42" height="33" viewBox="0 0 42 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M39.8848 15.2395H37.7959V12.6927C37.7959 12.6876 37.7907 12.6824 37.7907 12.6773C37.7805 10.326 36.1598 8.36062 33.9783 7.79467V1.27081C33.9783 0.571094 33.4124 0 32.7075 0H5.07886C3.76174 0 2.45491 0.540224 1.48251 1.4869C0.53583 2.43358 -0.00439453 3.74041 -0.00439453 5.06782V27.9322C-0.00439453 30.7259 2.27484 33 5.07886 33H32.7178C34.0761 33 35.352 32.4701 36.309 31.5131C37.2711 30.5561 37.7959 29.2802 37.7959 27.9322V27.927V25.3957H39.8848C40.5845 25.3957 41.1556 24.8246 41.1556 24.1249V16.5103C41.1556 15.8054 40.5896 15.2395 39.8848 15.2395ZM3.26782 3.29794C3.7566 2.81946 4.4203 2.54163 5.07886 2.54163H31.447V7.61459H5.07886C3.67428 7.61459 2.53723 6.4724 2.53723 5.07297C2.53723 4.40926 2.80477 3.75585 3.26782 3.29794ZM35.2594 27.9322C35.2594 28.601 34.997 29.2339 34.5134 29.7175C34.0349 30.196 33.3969 30.4635 32.7178 30.4635H5.07886C3.67428 30.4635 2.53723 29.3316 2.53723 27.9373V9.44107C3.2884 9.87839 4.14762 10.1511 5.07886 10.1511H32.7178C34.1172 10.1511 35.2594 11.2933 35.2594 12.6927V12.6978V15.2343H29.8983C28.54 15.2343 27.2692 15.7643 26.3225 16.7109C25.3604 17.6525 24.8305 18.9336 24.8305 20.3073C24.8305 23.1113 27.1046 25.3906 29.9035 25.3906H35.2645V27.9219C35.2594 27.927 35.2594 27.927 35.2594 27.9322ZM38.6139 22.8541H29.8983C28.504 22.8541 27.367 21.7119 27.367 20.3073C27.367 19.623 27.6242 18.9902 28.1079 18.5168C28.5915 18.0332 29.214 17.776 29.8983 17.776H38.6191V22.8541H38.6139Z" fill="white" />
                    </Svg>

                    <Text style={styles.section2Text}> Wallet</Text>
                </View>
                </TouchableOpacity>
            </View>

            <View style={styles.walletSectionData}>
                <Text>Urban Wallet</Text>
                <Text>KSH 2000</Text>
            </View>

            <View style={styles.thirdSection}>

                <Pressable  style={styles.iconData}>
                    <Ionicons name="settings" size={15} />
                    <Text>Settings</Text>
                </Pressable>
                <Pressable  style={styles.iconData}>
                    <Ionicons name="mail" size={15} />
                    <Text>Messages</Text>
                </Pressable>
                <Pressable  style={styles.iconData}>
                    <Ionicons name="promotion" size={15} />
                    <Text>Promotions</Text>
                </Pressable>
                <Pressable  style={styles.iconData}>
                    <Ionicons name="account" size={15} />
                    <Text>ManageAccount</Text>
                </Pressable>

                <Pressable  style={styles.iconData}>
                    <Ionicons name="time" size={15} />
                    <Text>Legal</Text>
                </Pressable>

                <Pressable style={styles.iconData} 
                // onPress={logout()}
                >
                    <Ionicons name="person" size={15} />
                    <Text>Logout</Text>
                </Pressable>


            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        height: '100%'
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    driverSection: {
        flexDirection: 'column'
    },
    ratingContainer: {
        color: 'white',
        backgroundColor: '#4E4E4E',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        maxWidth: 60,
        padding: 6
    },
    ratingText: {
        color: 'white'
    },
    secondSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10
    },
    helpSection: {
        backgroundColor: '#003D8E',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 20,
        borderRadius: 10
    },
    walletSection: {
        backgroundColor: '#003D8E',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 20,
        borderRadius: 10
    },
    section2Text: {
        color: 'white',
        paddingTop: 10
    },
    walletSectionData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#E4E4E4',
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderRadius: 10
    },
    thirdSection: {
        paddingTop: 20
    },
    iconData: {
        flexDirection: 'row'
    }

});

export default AccountPage;
