package com.google.vrtoolkit.cardboard.samples.treasurehunt;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.google.vr.sdk.audio.GvrAudioEngine;
import com.google.vrtoolkit.cardboard.CardboardActivity;
import com.google.vrtoolkit.cardboard.CardboardView;
import com.google.vrtoolkit.cardboard.samples.treasurehunt.render.CardboardRender;

public class PhotoActivity extends CardboardActivity {

    private CardboardView cardboardView;
    public static GvrAudioEngine gvrAudioEngine;
    private volatile int successSourceId = GvrAudioEngine.INVALID_ID;
    private static final String SUCCESS_SOUND_FILE = "drum.wav";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_photo);

        cardboardView = (CardboardView) findViewById(R.id.cardboard_view);

        cardboardView.setRestoreGLStateEnabled(false);
//        cardboardView.setDistortionCorrectionEnabled(false);
        gvrAudioEngine = new GvrAudioEngine(this, GvrAudioEngine.RenderingMode.BINAURAL_HIGH_QUALITY);
        cardboardView.setRenderer(new CardboardRender(this));

        setCardboardView(cardboardView);
    }

    @Override
    public void onCardboardTrigger() {
        super.onCardboardTrigger();

        successSourceId = gvrAudioEngine.createStereoSound(SUCCESS_SOUND_FILE);
        gvrAudioEngine.playSound(successSourceId, false);
    }
}
