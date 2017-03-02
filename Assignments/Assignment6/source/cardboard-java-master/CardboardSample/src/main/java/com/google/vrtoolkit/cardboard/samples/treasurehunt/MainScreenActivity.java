package com.google.vrtoolkit.cardboard.samples.treasurehunt;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainScreenActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_screen);

        Button gameBtn = (Button) findViewById(R.id.gamebutton);
        gameBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onGameBtnClicked();
            }
        });

        Button imageBtn = (Button) findViewById(R.id.imgbutton);
        imageBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onImageBtnClicked();
            }
        });


    }

    private void onImageBtnClicked() {

        Intent redirect = new Intent(MainScreenActivity.this, PhotoActivity.class);
        startActivity(redirect);
    }

    private void onGameBtnClicked() {

        Intent redirect = new Intent(MainScreenActivity.this, MainActivity.class);
        startActivity(redirect);
    }

}
