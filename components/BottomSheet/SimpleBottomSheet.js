import React, { useRef } from "react";
import { View, Button,StyleSheet} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const SimpleBottomSheet = ({children,_refSimpleBottomSheet,height=300,draggableDown=true}) => {
    return (
        <View
            style={{
            
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000"
            }}
        >
            <RBSheet
                ref={_refSimpleBottomSheet}
                closeOnDragDown={draggableDown}
                closeOnPressMask={false}
                dragFromTopOnly={false}
                height={height}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
               {children}
            </RBSheet>
        </View>
    );
}

export default SimpleBottomSheet

const styles = StyleSheet.create({})
